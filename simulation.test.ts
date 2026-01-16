import { Simulation } from '../src/simulations';

describe('Simulation Class', () => {
    let simulation: Simulation;

    beforeEach(() => {
        simulation = new Simulation();
    });

    test('should run the simulation', () => {
        simulation.run();
        expect(simulation.isRunning).toBe(true);
    });

    test('should reset the simulation', () => {
        simulation.run();
        simulation.reset();
        expect(simulation.isRunning).toBe(false);
    });
});