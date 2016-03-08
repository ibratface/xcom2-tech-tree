var data = {};

function initNodes(data, type) {
    for (var key in data) {
        data[key].id = key;
        data[key].name = key.split('_').join(' ');
        data[key].type = type;
        if (!data[key].requires) data[key].requires = [];
        data[key].children = [];
        data[key].weight = 0;
        data[key].row = 1;
        data[key].depth = 0;
        data[key].size = 2;
    }
}

function arrangeNodes(data) {
    // create tree structure
    for (var key in data) {
        for (var i = 0; i < data[key].requires.length; i++) {
            var parent = data[key].requires[i];
            if (data[parent]) {
                data[parent].children.push(data[key]);
            }
        }
    }

    var byWeight = function(l, r) {
        return l.weight - r.weight;
    };

    var roots = [];
    for (var key in data) {
        if (data[key].requires.length == 0) {
            roots.push(data[key]);
        }
    }

    // figure out the depth and weight of each node
    var depth = 0;
    var walk_depth_weight = function(node) {
        var weight = 1;
        if (node.depth < depth) {
            node.depth = depth;
        }
        depth++;
        for (var i = 0; i < node.children.length; i++) {
            weight += walk_depth_weight(node.children[i]);
        }
        depth--;
        node.weight = weight;
        return weight;
    }
    for (var i = 0; i < roots.length; i++) {
        depth = 0;
        walk_depth_weight(roots[i]);
    }

    // now figure out which row to place them
    roots.sort(byWeight);

    row = 2;
    var walk_row = function(node) {
        node.row = row;
        row++;
        node.children.sort(byWeight);
        for (var i = 0; i < node.children.length; i++) {
            walk_row(node.children[i]);
        }
    }

    for (var i = 0; i < roots.length; i++) {
        walk_row(roots[i]);
    }

    return roots;
}

var drawPath = function(d) {
    var svg = d3.select('svg#path');
    var lineage = {};
    lineage.nodes = [];
    var trace = function(node) {
        lineage.nodes.push(node);
        for (var parent in node.requires) {
            if (data[node.requires[parent]].depth == node.depth - 1) {
                trace(data[node.requires[parent]]);
                break;
            }
        }
    }
    trace(d);
    lineage.links = [];
    for (var i=0; i<lineage.nodes.length-1; i++)
    {
        lineage.links.push({
            source: lineage.nodes[i],
            target: lineage.nodes[i+1],
        });
    }

    var xOffset = 15;
    var yOffset = 15;
    var ySpacing = 50;
    svg.attr('width', '100%');
    svg.attr('height', ySpacing * d.depth + yOffset * 2);

    svg.selectAll(".link").remove();
    svg.selectAll(".link").data(lineage.links).enter().append("line")
        .attr("class", "link")
        .attr("x1", function(d) {
            return xOffset;
        })
        .attr("y1", function(d) {
            return d.source.depth * ySpacing + yOffset;
        })
        .attr("x2", function(d) {
            return xOffset;
        })
        .attr("y2", function(d) {
            return d.target.depth * ySpacing + yOffset;
        });

    svg.selectAll(".node").remove();
    svg.selectAll(".node").data(lineage.nodes).enter().append("circle")
        .attr('r', function(d) {
            return 10;
        })
        .attr("class", function(d) {
            return "node " + d.type + ' ' + (d.selected?'selected':'');
        })
        .attr("cx", function(d) {
            return xOffset;
        })
        .attr("cy", function(d) {
            return d.depth * ySpacing + yOffset;
        })
        .attr("id", function(d) {
            return d.id;
        });

    svg.selectAll(".text").remove();
    svg.selectAll(".text").data(lineage.nodes).enter().append("text")
        .attr("class", function(d) {
            return "text " + d.type + ' ' + (d.selected?'selected':'');
        })
        .text(function(d) {
            return d.name;
        })
        .attr("x", function(d) {
            return xOffset + 25;
        })
        .attr("y", function(d) {
            var bbox = this.getBBox();
            return d.depth * ySpacing + yOffset + 5;
        });
}

var showInfo = function(d) {
    $('#dialog').hide();
    $('#dialog').slideDown(duration = 200);
    // $('#info > h3').html(d.name);
    // $('#info > p').html(d.description);
    $('#info > table').html('');
    if (d.cost) {
        $('#info > table')
            .append(
                '<tr>\
                <th class="resource">Costs</th>\
                <th>R</th>\
                <th>V</th>\
                <th>C</th>\
                <th>L</th>\
                </tr>'
            );
    }
    for (var resource in d.cost) {
        var row = $('<tr></tr>');
        row.append('<td class="resource">' + resource.split('_').join(' ') + '</td>');
        for (var difficulty in d.cost[resource])
            row.append('<td>' + d.cost[resource][difficulty] + '</td>');
        row.appendTo('#info > table');
    }
    $('#info > p').html(d.description);
}

var onNodeClick = function(d) {
    d.selected = true;
    drawPath(d);
    showInfo(d);
    d.selected = false;
}

$(document).ready(function() {
    // data prep
    initNodes(events, 'event');
    initNodes(facilities, 'facility');
    initNodes(research, 'research');
    initNodes(projects, 'project');
    initNodes(items, 'item');
    initNodes(drops, 'drop');

    $.extend(data, events);
    $.extend(data, research);
    $.extend(data, facilities);
    $.extend(data, items);
    $.extend(data, projects);
    $.extend(data, drops);

    arrangeNodes(data);
    var graph = {
        xOffset: 0,
        yOffset: 0,
        xSpacing: 1,
        ySpacing: 1,
        root: data['mission_gatecrasher'],
        xView: -400,
        yView: -400,
        wView: 1600,
        hView: 800,
    };

    graph.nodes = [];
    graph.links = [];
    for (var key in data) {
        graph.nodes.push(data[key]);
        for (var i = 0; i < data[key].children.length; i++) {
            graph.links.push({
                id: key + i,
                source: data[key],
                target: data[key].children[i],
            });
        }
    }

    // normalize row and initialize node locations
    graph.nodes.sort(function(l, r) {
        return l.row - r.row;
    });
    for (var i = 0; i < graph.nodes.length; i++) {
        graph.nodes[i].row = i + 1;
        graph.nodes[i].x = graph.nodes[i].depth * graph.xSpacing + graph.xOffset;
        graph.nodes[i].y = graph.nodes[i].row * graph.ySpacing + graph.yOffset;
        graph.nodes[i].size = 20 / (graph.nodes[i].depth + 1) + 2;
    }
    graph.root.fixed = true;
    graph.root.x = 0;
    graph.root.y = 0;

    var outer_width = $('#container').width();
    var outer_height = $('#container').height();
    var chart_width = $('svg#chart').width();
    var chart_height = $('svg#chart').height();
    $('#container').scrollLeft((chart_width - outer_width) / 2)
    $('#container').scrollTop((chart_height - outer_height) / 2)

    var svg = d3.select("svg#chart")
        .attr('viewBox', function(d) {
            return '' + -chart_width / 2 + ' ' + -chart_height / 2 + ' ' + chart_width + ' ' + chart_height + '';
        });;

    var force = d3.layout.fruchtermanReingold()
        .autoArea(false)
        .area(chart_width * chart_height / 8)
        .gravity(0.75)
        .speed(0.1)
        .iterations(1500)
        .nodes(graph.nodes)
        .links(graph.links);

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link");

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr('r', function(d) {
            return d.size;
        })
        .attr("class", function(d) {
            return "node " + d.type;
        })
        .attr("id", function(d) {
            return d.id;
        })
        .on('click', onNodeClick);

    var text = svg.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("class", function(d) {
            return "text " + d.type;
        })
        .text(function(d) {
            return d.name;
        })
        .on('click', onNodeClick);

    force.on("tick", function(e) {
        text.attr("x", function(d) {
                var bbox = this.getBBox();
                var x = d.x - bbox.width / 2;
                return x;
            })
            .attr("y", function(d) {
                if (d.y == 0) return 0;
                var bbox = this.getBBox();
                var y = d.y + bbox.height / 3;
                y += 15 * (d.y > 0 ? 1 : -1);
                return y;
            });

        node.attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });

        link
            .attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            });
    });

    force.start();
});
