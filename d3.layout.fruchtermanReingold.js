// A rudimentary force layout using Gauss-Seidel.
d3.layout.fruchtermanReingold = function() {
    var force = {},
        event = d3.dispatch("start", "tick", "end"),
        timer,
        size = [1, 1],
        drag,
        alpha,
        friction = 0.9,
        linkDistance = d3_layout_forceLinkDistance,
        linkStrength = d3_layout_forceLinkStrength,
        charge = -30,
        chargeDistance2 = d3_layout_forceChargeDistance2,
        gravity = 0.1,
        theta2 = 0.64,
        speed = 0.1,
        nodes = [],
        links = [],
        distances,
        strengths,
        charges,
        iterations = 1000,
        iterCount = 0;

    force.tick = function() {
        // if ((alpha *= 0.99) < 0.005) {
        //     timer = null;
        //     event.end({
        //         type: "end",
        //         alpha: alpha = 0
        //     });
        //     return true;
        // }

        if (iterCount <= 0) {
            event.end({
                type: "end",
                alpha: alpha = 0
            });
            return true;
        }

        var i,
            j,
            n,
            n2,
            e,
            xDist,
            yDist,
            dist,
            repulsiveF,
            nodesCount = nodes.length,
            edgesCount = links.length;

        var area = nodesCount * nodesCount * 100;
        var maxDisplace = Math.sqrt(area) / 10,
            k = Math.sqrt(area / (1 + nodesCount));

        for (i = 0; i < nodesCount; i++) {
            n = nodes[i];

            // Init
            if (!n.fr) {
                n.fr_x = n.x;
                n.fr_y = n.y;
                n.fr = {
                    dx: 0,
                    dy: 0
                };
            }

            for (j = 0; j < nodesCount; j++) {
                n2 = nodes[j];

                // Repulsion force
                if (n.id != n2.id) {
                    xDist = n.fr_x - n2.fr_x;
                    yDist = n.fr_y - n2.fr_y;
                    dist = Math.sqrt(xDist * xDist + yDist * yDist) + 0.01;
                    // var dist = Math.sqrt(xDist * xDist + yDist * yDist) - n1.size - n2.size;

                    if (dist > 0) {
                        repulsiveF = k * k / dist;
                        n.fr.dx += xDist / dist * repulsiveF;
                        n.fr.dy += yDist / dist * repulsiveF;
                    }
                }
            }
        }

        var nSource,
            nTarget,
            attractiveF;

        for (i = 0; i < edgesCount; i++) {
            e = links[i];

            // Attraction force
            nSource = e.source;
            nTarget = e.target;

            xDist = nSource.fr_x - nTarget.fr_x;
            yDist = nSource.fr_y - nTarget.fr_y;
            dist = Math.sqrt(xDist * xDist + yDist * yDist) + 0.01;
            // dist = Math.sqrt(xDist * xDist + yDist * yDist) - nSource.size - nTarget.size;
            attractiveF = dist * dist / k;

            if (dist > 0) {
                nSource.fr.dx -= xDist / dist * attractiveF;
                nSource.fr.dy -= yDist / dist * attractiveF;
                nTarget.fr.dx += xDist / dist * attractiveF;
                nTarget.fr.dy += yDist / dist * attractiveF;
            }
        }

        var d,
            gf,
            limitedDist;

        for (i = 0; i < nodesCount; i++) {
            n = nodes[i];

            // Gravity
            d = Math.sqrt(n.fr_x * n.fr_x + n.fr_y * n.fr_y);
            gf = 0.01 * k * gravity * d;
            n.fr.dx -= gf * n.fr_x / d;
            n.fr.dy -= gf * n.fr_y / d;

            // Speed
            n.fr.dx *= speed;
            n.fr.dy *= speed;

            // Apply computed displacement
            if (!n.fixed) {
                xDist = n.fr.dx;
                yDist = n.fr.dy;
                dist = Math.sqrt(xDist * xDist + yDist * yDist);

                if (dist > 0) {
                    limitedDist = Math.min(maxDisplace * speed, dist);
                    n.fr_x += xDist / dist * limitedDist;
                    n.fr_y += yDist / dist * limitedDist;
                }
            }
        }

        for (var i = 0; i < nodes.length; i++) {
          nodes[i].x = nodes[i].fr_x;
          nodes[i].y = nodes[i].fr_y;
        }

        iterCount--;

        event.tick({
            type: "tick",
            alpha: alpha
        });
    };

    force.nodes = function(x) {
        if (!arguments.length) return nodes;
        nodes = x;
        return force;
    };

    force.links = function(x) {
        if (!arguments.length) return links;
        links = x;
        return force;
    };

    force.size = function(x) {
        if (!arguments.length) return size;
        size = x;
        return force;
    };

    force.linkDistance = function(x) {
        if (!arguments.length) return linkDistance;
        linkDistance = typeof x === "function" ? x : +x;
        return force;
    };

    // For backwards-compatibility.
    force.distance = force.linkDistance;

    force.linkStrength = function(x) {
        if (!arguments.length) return linkStrength;
        linkStrength = typeof x === "function" ? x : +x;
        return force;
    };

    force.friction = function(x) {
        if (!arguments.length) return friction;
        friction = +x;
        return force;
    };

    force.charge = function(x) {
        if (!arguments.length) return charge;
        charge = typeof x === "function" ? x : +x;
        return force;
    };

    force.chargeDistance = function(x) {
        if (!arguments.length) return Math.sqrt(chargeDistance2);
        chargeDistance2 = x * x;
        return force;
    };

    force.gravity = function(x) {
        if (!arguments.length) return gravity;
        gravity = +x;
        return force;
    };

    force.theta = function(x) {
        if (!arguments.length) return Math.sqrt(theta2);
        theta2 = x * x;
        return force;
    };

    force.alpha = function(x) {
        if (!arguments.length) return alpha;

        x = +x;
        if (alpha) { // if we're already running
            if (x > 0) { // we might keep it hot
                alpha = x;
            } else { // or we might stop
                timer.c = null, timer.t = NaN, timer = null;
                event.end({
                    type: "end",
                    alpha: alpha = 0
                });
            }
        } else if (x > 0) { // otherwise, fire it up!
            event.start({
                type: "start",
                alpha: alpha = x
            });
            timer = d3_timer(force.tick);
        }

        return force;
    };

    force.start = function() {
        iterCount = iterations;

        for (var i = 0; i < nodes.length; i++) {
            nodes[i].fr_x = nodes[i].x;
            nodes[i].fr_y = nodes[i].y;
            nodes[i].fr = {
                dx: 0,
                dy: 0
            };
        }
        //
        // var i,
        //     n = nodes.length,
        //     m = links.length,
        //     w = size[0],
        //     h = size[1],
        //     neighbors,
        //     o;
        //
        // for (i = 0; i < n; ++i) {
        //     (o = nodes[i]).index = i;
        //     o.weight = 0;
        // }
        //
        // for (i = 0; i < m; ++i) {
        //     o = links[i];
        //     if (typeof o.source == "number") o.source = nodes[o.source];
        //     if (typeof o.target == "number") o.target = nodes[o.target];
        //     ++o.source.weight;
        //     ++o.target.weight;
        // }
        //
        // for (i = 0; i < n; ++i) {
        //     o = nodes[i];
        //     if (isNaN(o.x)) o.x = position("x", w);
        //     if (isNaN(o.y)) o.y = position("y", h);
        //     if (isNaN(o.px)) o.px = o.x;
        //     if (isNaN(o.py)) o.py = o.y;
        // }
        //
        // distances = [];
        // if (typeof linkDistance === "function")
        //     for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i);
        // else
        //     for (i = 0; i < m; ++i) distances[i] = linkDistance;
        //
        // strengths = [];
        // if (typeof linkStrength === "function")
        //     for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i);
        // else
        //     for (i = 0; i < m; ++i) strengths[i] = linkStrength;
        //
        // charges = [];
        // if (typeof charge === "function")
        //     for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i);
        // else
        //     for (i = 0; i < n; ++i) charges[i] = charge;
        //
        // // inherit node position from first neighbor with defined position
        // // or if no such neighbors, initialize node position randomly
        // // initialize neighbors lazily to avoid overhead when not needed
        // function position(dimension, size) {
        //     if (!neighbors) {
        //         neighbors = new Array(n);
        //         for (j = 0; j < n; ++j) {
        //             neighbors[j] = [];
        //         }
        //         for (j = 0; j < m; ++j) {
        //             var o = links[j];
        //             neighbors[o.source.index].push(o.target);
        //             neighbors[o.target.index].push(o.source);
        //         }
        //     }
        //     var candidates = neighbors[i],
        //         j = -1,
        //         l = candidates.length,
        //         x;
        //     while (++j < l)
        //         if (!isNaN(x = candidates[j][dimension])) return x;
        //     return Math.random() * size;
        // }

        return force.resume();
    };

    force.resume = function() {
        return force.alpha(0.1);
    };

    force.stop = function() {
        return force.alpha(0);
    };

    // use `node.call(force.drag)` to make nodes draggable
    force.drag = function() {
        if (!drag) drag = d3.behavior.drag()
            .origin(d3_identity)
            .on("dragstart.force", d3_layout_forceDragstart)
            .on("drag.force", dragmove)
            .on("dragend.force", d3_layout_forceDragend);

        if (!arguments.length) return drag;

        this.on("mouseover.force", d3_layout_forceMouseover)
            .on("mouseout.force", d3_layout_forceMouseout)
            .call(drag);
    };

    function dragmove(d) {
        d.px = d3.event.x, d.py = d3.event.y;
        force.resume(); // restart annealing
    }

    return d3.rebind(force, event, "on");
};

// The fixed property has three bits:
// Bit 1 can be set externally (e.g., d.fixed = true) and show persist.
// Bit 2 stores the dragging state, from mousedown to mouseup.
// Bit 3 stores the hover state, from mouseover to mouseout.
// Dragend is a special case: it also clears the hover state.

function d3_layout_forceDragstart(d) {
    d.fixed |= 2; // set bit 2
}

function d3_layout_forceDragend(d) {
    d.fixed &= ~6; // unset bits 2 and 3
}

function d3_layout_forceMouseover(d) {
    d.fixed |= 4; // set bit 3
    d.px = d.x, d.py = d.y; // set velocity to zero
}

function d3_layout_forceMouseout(d) {
    d.fixed &= ~4; // unset bit 3
}

var d3_layout_forceLinkDistance = 20,
    d3_layout_forceLinkStrength = 1,
    d3_layout_forceChargeDistance2 = Infinity;
