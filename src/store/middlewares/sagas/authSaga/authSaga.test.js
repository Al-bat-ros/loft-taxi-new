import { recordSaga } from './recordSaga';
import { authenticateSaga } from './authSaga';
import { authenticat } from '../../action-creators/actions'

jest.mock("../../api/getRequest.jsx", () => ({ serverLogin: jest.fn(() => true )}))

describe("authSaga", () => {
    describe("AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatched = await recordSaga(
                authenticateSaga, 
                authenticat("testLogin", "testpassword")
            )
            
            expect(dispatched).toEqual([
                {
                    type: "FETCH_LOG_IN"
                }
            ])
        })
    })
})