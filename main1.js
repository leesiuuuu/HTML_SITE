const physics = new Physics();
    
    const ball = frame.asset('img/GameImg/idle.gif')
                  .sca(.2)
                  .centerReg(stage)
                  .addPhysics({
                    shape:'circle',
                    restitution:.7
                  });

obj.addPhysics(dynamic, contract, shape, friction, linear, angular, density, bounciness, maskBits, categoryBits, physics, restitution)
