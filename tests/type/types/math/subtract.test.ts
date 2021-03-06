import { Expect } from '../../../../src/types/expect';
import { Subtract } from '../../../../src/types/math/subtract';

type Subtract1Value = Subtract<6, 4>;
export type Subtract1Test = Expect<Subtract1Value, 2, true>;
