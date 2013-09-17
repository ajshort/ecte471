run = (function() {
    var plates = [];

    for(var i = 0; i < 2; i++) {
        plates.push(Builder.plate());
    }

    var columns = [];

    for(var i = 0; i < 4; i++) {
        columns.push(Builder.column());
    }

    var bolts = [];

    for(var i = 0; i < 8; i++) {
        bolts.push(Builder.bolt());
    }

    var fixed = (function() {
        function a() {
            var position = scene.fixed;
            var target = { base: -0.804, elbow: -0.3428, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(b)
                .start();
        }

        function b() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = columns[0];
                    scene.fixed.links.tool.add(columns[0]);

                    columns[0].rotation.set(Math.PI/2, 0, 0);
                    columns[0].position.set(0, -20, 0);

                    c();
                })
                .start();
        }

        function c() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(d)
                .delay(1000)
                .start();
        }

        function d() {
            var position = scene.fixed;
            var target = { base: 1.434, elbow: 1.012 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(e)
                .delay(6500)
                .start();
        }

        function e() {
            var position = scene.fixed;
            var target = { column: 1135 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var column = scene.fixed.links.item

                    scene.fixed.links.tool.remove(column);
                    column.rotation.set(0, 0, 0)
                    column.position.set(-600, 225, 15);
                    plates[0].add(column);

                    f();
                })
                .start();
        }

        function f() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(g)
                .delay(1000)
                .start();
        }

        function g() {
            var position = scene.fixed;
            var target = { base: -0.804, elbow: -0.3428, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(h)
                .start();
        }

        function h() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = columns[1];
                    scene.fixed.links.tool.add(columns[1]);

                    columns[1].rotation.set(Math.PI/2, 0, 0);
                    columns[1].position.set(0, -20, 0);

                    i();
                })
                .start();
        }

        function i() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(j)
                .delay(1000)
                .start();
        }

        function j() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 0.5954 - 0.1713, elbow: 2 * 0.1713 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(k)
                .start();
        }

        function k() {
            var position = scene.fixed;
            var target = { column: 1135 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var column = scene.fixed.links.item

                    scene.fixed.links.tool.remove(column);
                    column.rotation.set(0, 0, 0)
                    column.position.set(-600, -225, 15);
                    plates[0].add(column);

                    l();
                })
                .start();
        }

        function l() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(m)
                .delay(1000)
                .start();
        }

        function m() {
            var position = scene.fixed;
            var target = { base: -0.804, elbow: -0.3428, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(n)
                .start();
        }

        function n() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = columns[2];
                    scene.fixed.links.tool.add(columns[2]);

                    columns[2].rotation.set(Math.PI/2, 0, 0);
                    columns[2].position.set(0, -20, 0);

                    o();
                })
                .start();
        }

        function o() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(p)
                .delay(1000)
                .start();
        }

        function p() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 1.043 - 1.197, elbow: 2 * 1.197 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(q)
                .start();
        }

        function q() {
            var position = scene.fixed;
            var target = { column: 1135 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var column = scene.fixed.links.item

                    scene.fixed.links.tool.remove(column);
                    column.rotation.set(0, 0, 0)
                    column.position.set(600, 225, 15);
                    plates[0].add(column);

                    r();
                })
                .start();
        }

        function r() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(s)
                .delay(1000)
                .start();
        }

        function s() {
            var position = scene.fixed;
            var target = { base: -0.804, elbow: -0.3428, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(t)
                .start();
        }

        function t() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = columns[3];
                    scene.fixed.links.tool.add(columns[3]);

                    columns[3].rotation.set(Math.PI/2, 0, 0);
                    columns[3].position.set(0, -20, 0);

                    u();
                })
                .start();
        }

        function u() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(v)
                .delay(1000)
                .start();
        }

        function v() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 1.249 - 0.9490, elbow: 2 * 0.9490 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(w)
                .start();
        }

        function w() {
            var position = scene.fixed;
            var target = { column: 1135 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var column = scene.fixed.links.item

                    scene.fixed.links.tool.remove(column);
                    column.rotation.set(0, 0, 0)
                    column.position.set(600, -225, 15);
                    plates[0].add(column);

                    x();
                })
                .start();
        }

        function x() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(y)
                .delay(1000)
                .start();
        }

        function y() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(z)
                .start();
        }

        function z() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[0];
                    scene.fixed.links.tool.add(bolts[0]);

                    bolts[0].rotation.set(Math.PI/2, 0, 0);
                    bolts[0].position.set(0, -20, 0);

                    aa();
                })
                .start();
        }

        function aa() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ab)
                .delay(1000)
                .start();
        }

        function ab() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 0.5954 - 0.1713, elbow: 2 * 0.1713 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(ac)
                .delay(13500)
                .start();
        }

        function ac() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ad)
                .start();
        }

        function ad() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(-600, -225, 50);
                    plates[1].add(bolt);

                    ae();
                })
                .delay(250)
                .start();
        }

        function ae() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(af)
                .delay(1000)
                .start();
        }

        function af() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(ag)
                .start();
        }

        function ag() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[1];
                    scene.fixed.links.tool.add(bolts[1]);

                    bolts[1].rotation.set(Math.PI/2, 0, 0);
                    bolts[1].position.set(0, -20, 0);

                    ah();
                })
                .start();
        }

        function ah() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ai)
                .delay(1000)
                .start();
        }

        function ai() {
            var position = scene.fixed;
            var target = { base: 1.434, elbow: 1.012 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(aj)
                .delay(4000)
                .start();
        }

        function aj() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ak)
                .start();
        }

        function ak() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            position.wrist = 0;

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(-600, 225, 50);
                    plates[1].add(bolt);

                    al();
                })
                .delay(250)
                .start();
        }

        function al() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(am)
                .delay(1000)
                .start();
        }

        function am() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(an)
                .start();
        }

        function an() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[2];
                    scene.fixed.links.tool.add(bolts[2]);

                    bolts[2].rotation.set(Math.PI/2, 0, 0);
                    bolts[2].position.set(0, -20, 0);

                    ao();
                })
                .start();
        }

        function ao() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ap)
                .delay(1000)
                .start();
        }

        function ap() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 1.249 - 0.9490, elbow: 2 * 0.9490 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(aq)
                .delay(4000)
                .start();
        }

        function aq() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ar)
                .start();
        }

        function ar() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            position.wrist = 0;

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(600, -225, 50);
                    plates[1].add(bolt);

                    as();
                })
                .delay(250)
                .start();
        }

        function as() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(au)
                .delay(1000)
                .start();
        }

        function au() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(av)
                .start();
        }

        function av() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[3];
                    scene.fixed.links.tool.add(bolts[3]);

                    bolts[3].rotation.set(Math.PI/2, 0, 0);
                    bolts[3].position.set(0, -20, 0);

                    aw();
                })
                .start();
        }

        function aw() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ax)
                .delay(1000)
                .start();
        }

        function ax() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 1.043 - 1.197, elbow: 2 * 1.197 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(ay)
                .delay(6000)
                .start();
        }

        function ay() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(az)
                .start();
        }

        function az() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            position.wrist = 0;

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(600, 225, 50);
                    plates[1].add(bolt);

                    bc();
                })
                .delay(250)
                .start();
        }

        function bc() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(bd)
                .delay(1000)
                .start();
        }

        function bd() {
            var position = scene.fixed;
            var target = { column: 600 };

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .start();
        }

        return a;
    })();

    var rail = (function() {
        function a() {
            var position = scene.rail;
            var target = { rail: 387.29, base: -(Math.PI/2 + 0.5053), column: 750, elbow: 0.5053 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                })
                .onComplete(b)
                .start();
        }

        function b() {
            var position = scene.rail;
            var target = { rail: 0 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    var angle = Math.asin(position.rail / 800);

                    position.setRail(position.rail);
                    position.setBase(-(Math.PI/2 + angle));
                    position.setElbow(angle);
                })
                .onComplete(function() {
                    scene.rail.links.item = plates[0];
                    scene.rail.links.tool.add(scene.rail.links.item);

                    plates[0].rotation.set(Math.PI/2, 0, 0);
                    plates[0].position.set(0, -20, 0);

                    scene.removePlate();

                    c();
                })
                .start();
        }

        function c() {
            var position = scene.rail;
            var target = { rail: 387.29 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    var angle = Math.asin(position.rail / 800);

                    position.setRail(position.rail);
                    position.setBase(-(Math.PI/2 + angle));
                    position.setElbow(angle);
                })
                .delay(1000)
                .onComplete(d)
                .start();
        }

        function d() {
            var position = scene.rail;
            var target = { rail: 800, base: -Math.PI, elbow: Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(e)
                .start();
        }

        function e() {
            var position = scene.rail;
            var target = { rail: 1975.4, base: -Math.PI/2, elbow: Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(f)
                .start();
        }

        function f() {
            var position = scene.rail;
            var target = { column: 765, wrist: -3*Math.PI/8 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(g)
                .start();
        }

        function g() {
            var position = scene.rail;
            var target = { base: 0.25268, elbow: Math.PI/2 - 0.25268, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(h)
                .start();
        }

        function h() {
            var position = scene.rail;
            var target = { column: 665 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var plate = scene.rail.links.item

                    scene.rail.links.tool.remove(plate);
                    plate.rotation.set(0, 0, 0);
                    plate.position.set(750, 375, 250);
                    scene.table.add(plate);

                    i();
                })
                .start();
        }

        function i() {
            var position = scene.rail;
            var target = { column: 765 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .delay(1000)
                .onComplete(j)
                .start();
        }

        function j() {
            var position = scene.rail;
            var target = { rail: 387.29, base: -(Math.PI/2 + 0.5053), column: 750, elbow: 0.5053, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(k)
                .start();
        }

        function k() {
            var position = scene.rail;
            var target = { rail: 0 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    var angle = Math.asin(position.rail / 800);

                    position.setRail(position.rail);
                    position.setBase(-(Math.PI/2 + angle));
                    position.setElbow(angle);
                })
                .onComplete(function() {
                    scene.rail.links.item = plates[1];
                    scene.rail.links.tool.add(scene.rail.links.item);

                    plates[1].rotation.set(Math.PI/2, 0, 0);
                    plates[1].position.set(0, -20, 0);

                    scene.removePlate();

                    l();
                })
                .start();
        }

        function l() {
            var position = scene.rail;
            var target = { rail: 387.29 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    var angle = Math.asin(position.rail / 800);

                    position.setRail(position.rail);
                    position.setBase(-(Math.PI/2 + angle));
                    position.setElbow(angle);
                })
                .delay(1000)
                .onComplete(m)
                .start();
        }

        function m() {
            var position = scene.rail;
            var target = { rail: 800, base: -Math.PI, elbow: Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(n)
                .start();
        }

        function n() {
            var position = scene.rail;
            var target = { rail: 1975.4, base: -Math.PI/2, elbow: Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(o)
                .start();
        }

        function o() {
            var position = scene.rail;
            var target = { column: 880, wrist: -3*Math.PI/8 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(p)
                .delay(21000)
                .start();
        }

        function p() {
            var position = scene.rail;
            var target = { base: 0.25268, elbow: Math.PI/2 - 0.25268, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(q)
                .start();
        }

        function q() {
            var position = scene.rail;
            var target = { column: 780 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var plate = scene.rail.links.item

                    scene.rail.links.tool.remove(plate);
                    plate.rotation.set(0, 0, 0);
                    plate.position.set(750, 375, 365);
                    scene.table.add(plate);

                    r();
                })
                .start();
        }

        function r() {
            var position = scene.rail;
            var target = { column: 880 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .delay(1000)
                .onComplete(s)
                .start();
        }

        function s() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(t)
                .start();
        }

        function t() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    u();
                })
                .start();
        }

        function u() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(v)
                .start();
        }

        function v() {
            var position = scene.rail;
            var target = { rail: 2525, base: Math.PI/2, column: 885, elbow: 0, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(w)
                .start();
        }

        function w() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(-600, -225, 15);

                    plates[1].add(washer);

                    x();
                })
                .start();
        }

        function x() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .delay(1000)
                .onComplete(y)
                .start();
        }

        function y() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(z)
                .start();
        }

        function z() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    aa();
                })
                .start();
        }

        function aa() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(ab)
                .start();
        }

        function ab() {
            var position = scene.rail;
            var target = { rail: 2975, base: Math.PI/2, column: 885, elbow: 0, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(ac)
                .delay(2000)
                .start();
        }

        function ac() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(-600, 225, 15);

                    plates[1].add(washer);

                    ad();
                })
                .start();
        }

        function ad() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .delay(1000)
                .onComplete(ae)
                .start();
        }

        function ae() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(af)
                .start();
        }

        function af() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    ag();
                })
                .start();
        }

        function ag() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(ah)
                .start();
        }

        function ah() {
            var position = scene.rail;
            var target = { rail: 4017.82, base: Math.PI, column: 885, elbow: -0.5236, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(ai)
                .delay(1500)
                .start();
        }

        function ai() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(600, -225, 15);

                    plates[1].add(washer);

                    aj();
                })
                .start();
        }

        function aj() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .delay(1000)
                .onComplete(ak)
                .start();
        }

        function ak() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(al)
                .delay(1000)
                .start();
        }

        function al() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    am();
                })
                .start();
        }

        function am() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(an)
                .start();
        }

        function an() {
            var position = scene.rail;
            var target = { rail: 4467.82, base: Math.PI, column: 885, elbow: -0.5236, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .delay(1500)
                .onComplete(ao)
                .start();
        }

        function ao() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(600, 225, 15);

                    plates[1].add(washer);

                    ap();
                })
                .start();
        }

        function ap() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .delay(1000)
                .onComplete(aq)
                .start();
        }

        function aq() {
            var position = scene.rail;
            var target = { rail: 3524.59, column: 880, base: Math.PI - 0.25268, elbow: 0.25268 - Math.PI/2, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(ar)
                .start();
        }

        function ar() {
            var position = scene.rail;
            var target = { column: 780 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var plate = plates[1];

                    scene.table.remove(plate);
                    plates[1].rotation.set(-Math.PI/2, 0, 0);
                    plates[1].position.set(0, -35, 0);
                    scene.rail.links.tool.add(plate);

                    for(var i = 0; i < 4; i++) {
                        var col = columns[i];
                        col.position.setZ(-100);

                        plates[0].remove(col);
                        plates[1].add(col);
                    }

                    as();
                })
                .delay(3000)
                .start();
        }

        function as() {
            var position = scene.rail;
            var target = { column: 880 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .delay(1000)
                .onComplete(at)
                .start();
        }

        function at() {
            var position = scene.rail;
            var target = { base: 3 * Math.PI/2, elbow: -Math.PI/2 }

            new TWEEN.Tween(position)
                .to(target, 1500)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(au)
                .start();
        }

        function au() {
            var position = scene.rail;
            var target = { wrist: Math.PI/2 }

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setWrist(position.wrist);
                })
                .onComplete(av)
                .start();
        }

        function av() {
            var position = scene.rail;
            var target = { base: Math.PI - 0.25268, elbow: 0.25268 - Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 1500)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(aw)
                .start();
        }

        function aw() {
            flip();
        }

        return a;
    })();

    var flip = (function() {
        function a() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 0.7151 - 0.847, elbow: 2 * 0.847 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(b)
                .start();
        }

        function b() {
            var position = scene.fixed;
            var target = { column: 705, wrist: 0.0087 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var plate = plates[1];

                    scene.rail.links.tool.remove(plate);
                    scene.fixed.links.tool.add(plate);

                    plate.rotation.set(Math.PI/2, 0, 0);
                    plate.position.set(0, -20, 0);

                    c();
                })
                .start();
        }

        function c() {
            var position = scene.rail;
            var target = { wrist: -Math.PI/2 }

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setWrist(position.wrist);
                })
                .onComplete(d)
                .start();
        }

        function d() {
            var position = scene.rail;
            var target = { column: 665 };

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.rail.links.item = plates[0];
                    scene.rail.links.tool.add(scene.rail.links.item);
                    scene.table.remove(plates[0]);

                    plates[0].rotation.set(Math.PI/2, 0, 0);
                    plates[0].position.set(0, -20, 0);

                    e();
                })
                .start();
        }

        function e() {
            var position = scene.rail;
            var target = { column: 815 };

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(f)
                .delay(1000)
                .start();
        }

        function f() {
            var position = scene.rail;
            var target = { base: Math.PI, elbow: Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(g)
                .start();
        }

        function g() {
            var position = scene.fixed;
            var target = { column: 1237.5 };

            new TWEEN.Tween(position)
                .to(target, 2000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var plate = plates[1];

                    scene.fixed.links.tool.remove(plate);
                    scene.table.add(plate);

                    plates[1].rotation.set(Math.PI, 0, 0);
                    plates[1].position.set(750, 375, 265);

                    h();
                })
                .start();
        }

        function h() {
            var position = scene.fixed;
            var target = { column: 600 };

            new TWEEN.Tween(position)
                .to(target, 1500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(i)
                .delay(1000)
                .start();
        }

        function i() {
            var position = scene.rail;
            var target = { base: Math.PI - 0.25268, elbow: 0.25268 - Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 1500)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(j)
                .start();
        }

        function j() {
            var position = scene.rail;
            var target = { column: 780 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    var plate = plates[0];

                    scene.rail.links.tool.remove(plate);
                    plate.rotation.set(0, 0, 0);
                    plate.position.set(750, 375, 365);
                    scene.table.add(plate);

                    k();
                })
                .start();
        }

        function k() {
            var position = scene.rail;
            var target = { column: 880 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(l)
                .delay(1000)
                .start();
        }

        function l() {
            finaliseRail();
            finaliseFixed();
        }

        return a;
    })();

    var finaliseRail = (function() {
        function s() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(t)
                .delay(1500)
                .start();
        }

        function t() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    u();
                })
                .start();
        }

        function u() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(v)
                .start();
        }

        function v() {
            var position = scene.rail;
            var target = { rail: 2525, base: Math.PI/2, column: 885, elbow: 0, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(w)
                .start();
        }

        function w() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(-600, -225, 15);

                    plates[0].add(washer);

                    x();
                })
                .start();
        }

        function x() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .delay(1000)
                .onComplete(y)
                .start();
        }

        function y() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(z)
                .start();
        }

        function z() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    aa();
                })
                .start();
        }

        function aa() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(ab)
                .start();
        }

        function ab() {
            var position = scene.rail;
            var target = { rail: 2975, base: Math.PI/2, column: 885, elbow: 0, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(ac)
                .delay(2000)
                .start();
        }

        function ac() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(-600, 225, 15);

                    plates[0].add(washer);

                    ad();
                })
                .start();
        }

        function ad() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .delay(1000)
                .onComplete(ae)
                .start();
        }

        function ae() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(af)
                .start();
        }

        function af() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    ag();
                })
                .start();
        }

        function ag() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(ah)
                .start();
        }

        function ah() {
            var position = scene.rail;
            var target = { rail: 4017.82, base: Math.PI, column: 885, elbow: -0.5236, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(ai)
                .delay(1500)
                .start();
        }

        function ai() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(600, -225, 15);

                    plates[0].add(washer);

                    aj();
                })
                .start();
        }

        function aj() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .delay(1000)
                .onComplete(ak)
                .start();
        }

        function ak() {
            var position = scene.rail;
            var target = { rail: 5850.4143, base: -0.25268, column: 1250, elbow: 0.25268 - Math.PI/2, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(al)
                .delay(1000)
                .start();
        }

        function al() {
            var position = scene.rail;
            var target = { rail: 5883.39 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .onComplete(function() {
                    scene.rail.links.item = Builder.washer();
                    scene.rail.links.tool.add(scene.rail.links.item);

                    scene.rail.links.item.rotation.set(Math.PI/2, 0, 0);
                    scene.rail.links.item.position.set(0, -20, 0);

                    am();
                })
                .start();
        }

        function am() {
            var position = scene.rail;
            var target = { rail: 5850.4143 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    var angle = Math.acos((6625 - position.rail) / 800);

                    position.setRail(position.rail);
                    position.setBase(-angle);
                    position.setElbow(angle - Math.PI/2);
                })
                .delay(1000)
                .onComplete(an)
                .start();
        }

        function an() {
            var position = scene.rail;
            var target = { rail: 4467.82, base: Math.PI, column: 885, elbow: -0.5236, wrist: -Math.PI/2 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setColumn(position.column);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .delay(1500)
                .onComplete(ao)
                .start();
        }

        function ao() {
            var position = scene.rail;
            var target = { column: 785 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(function() {
                    var washer = scene.rail.links.item;
                    scene.rail.links.tool.remove(washer);

                    washer.rotation.set(0, 0, 0);
                    washer.position.set(600, 225, 15);

                    plates[0].add(washer);

                    ap();
                })
                .start();
        }

        function ap() {
            var position = scene.rail;
            var target = { column: 885 };

            new TWEEN.Tween(position)
                .to(target, 1000)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .onComplete(aq)
                .delay(1000)
                .start();
        }

        function aq() {
            var position = scene.rail;
            var target = { rail: 0, base: 0, elbow: 0, wrist: 0 };

            new TWEEN.Tween(position)
                .to(target, 4000)
                .onUpdate(function() {
                    position.setRail(position.rail);
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setWrist(position.wrist);
                })
                .onComplete(ar)
                .start();
        }

        function ar() {
            var position = scene.rail;
            var target = { column: 1000 };

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column)
                })
                .start();
        }

        return s;
    })();

    var finaliseFixed = (function() {
        function y() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(z)
                .start();
        }

        function z() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[4];
                    scene.fixed.links.tool.add(bolts[4]);

                    bolts[4].rotation.set(Math.PI/2, 0, 0);
                    bolts[4].position.set(0, -20, 0);

                    aa();
                })
                .start();
        }

        function aa() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ab)
                .delay(1000)
                .start();
        }

        function ab() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 0.5954 - 0.1713, elbow: 2 * 0.1713 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(ac)
                .delay(8250)
                .start();
        }

        function ac() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ad)
                .start();
        }

        function ad() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(-600, -225, 50);
                    plates[0].add(bolt);

                    ae();
                })
                .delay(250)
                .start();
        }

        function ae() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(af)
                .delay(1000)
                .start();
        }

        function af() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(ag)
                .start();
        }

        function ag() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[5];
                    scene.fixed.links.tool.add(bolts[5]);

                    bolts[5].rotation.set(Math.PI/2, 0, 0);
                    bolts[5].position.set(0, -20, 0);

                    ah();
                })
                .start();
        }

        function ah() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ai)
                .delay(1000)
                .start();
        }

        function ai() {
            var position = scene.fixed;
            var target = { base: 1.434, elbow: 1.012 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(aj)
                .delay(4000)
                .start();
        }

        function aj() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ak)
                .start();
        }

        function ak() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            position.wrist = 0;

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(-600, 225, 50);
                    plates[0].add(bolt);

                    al();
                })
                .delay(250)
                .start();
        }

        function al() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(am)
                .delay(1000)
                .start();
        }

        function am() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(an)
                .start();
        }

        function an() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[6];
                    scene.fixed.links.tool.add(bolts[6]);

                    bolts[6].rotation.set(Math.PI/2, 0, 0);
                    bolts[6].position.set(0, -20, 0);

                    ao();
                })
                .start();
        }

        function ao() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ap)
                .delay(1000)
                .start();
        }

        function ap() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 1.249 - 0.9490, elbow: 2 * 0.9490 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(aq)
                .delay(4000)
                .start();
        }

        function aq() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ar)
                .start();
        }

        function ar() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            position.wrist = 0;

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(600, -225, 50);
                    plates[0].add(bolt);

                    as();
                })
                .delay(250)
                .start();
        }

        function as() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(au)
                .delay(1000)
                .start();
        }

        function au() {
            var position = scene.fixed;
            var target = { base: -Math.PI/2 + 0.3410 + 0.5244, elbow: - 2*0.5244, column: 1150 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .onComplete(av)
                .start();
        }

        function av() {
            var position = scene.fixed;
            var target = { column: 1250 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(function() {
                    scene.fixed.links.item = bolts[7];
                    scene.fixed.links.tool.add(bolts[7]);

                    bolts[7].rotation.set(Math.PI/2, 0, 0);
                    bolts[7].position.set(0, -20, 0);

                    aw();
                })
                .start();
        }

        function aw() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(ax)
                .delay(1000)
                .start();
        }

        function ax() {
            var position = scene.fixed;
            var target = { base: Math.PI/2 + 1.043 - 1.197, elbow: 2 * 1.197 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                })
                .onComplete(ay)
                .delay(6000)
                .start();
        }

        function ay() {
            var position = scene.fixed;
            var target = { column: 1035 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(az)
                .start();
        }

        function az() {
            var position = scene.fixed;
            var target = { column: 1085, wrist: 6*Math.PI };

            position.wrist = 0;

            new TWEEN.Tween(position)
                .to(target, 750)
                .onUpdate(function() {
                    position.setColumn(position.column);
                    position.setWrist(position.wrist);
                })
                .onComplete(function() {
                    var bolt = scene.fixed.links.item

                    scene.fixed.links.tool.remove(bolt);
                    bolt.rotation.set(Math.PI, 0, 0)
                    bolt.position.set(600, 225, 50);
                    plates[0].add(bolt);

                    bc();
                })
                .delay(250)
                .start();
        }

        function bc() {
            var position = scene.fixed;
            var target = { column: 935 };

            new TWEEN.Tween(position)
                .to(target, 500)
                .onUpdate(function() {
                    position.setColumn(position.column);
                })
                .onComplete(bd)
                .delay(1000)
                .start();
        }

        function bd() {
            var position = scene.fixed;
            var target = { base: 0, elbow: 0, column: 500 };

            new TWEEN.Tween(position)
                .to(target, 3000)
                .onUpdate(function() {
                    position.setBase(position.base);
                    position.setElbow(position.elbow);
                    position.setColumn(position.column);
                })
                .start();
        }

        return y;
    })();

    return function() {
        fixed();
        rail();
    };
})();
