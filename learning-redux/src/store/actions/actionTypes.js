import counter from './counter';
import result from './result';

export default {
    increment: counter.increment,
    decrement: counter.decrement,
    add: counter.add,
    subtract: counter.subtract,
    storeResult: result.storeResult,
    deleteResult: result.deleteResult
}