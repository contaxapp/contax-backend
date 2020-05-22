import supertest from "supertest";
import app from "../../app";
const request = supertest(app);

describe("Testing Contact Routes", () => {
    it("GET /contact should work", async (done) => {
        const response = await request.get("/contact");
        expect(response.status).toBe(200);
        done();
    });

    it("POST /contact should work", async (done) => {
        const response = await request.post("/contact");
        expect(response.status).toBe(200);
        done();
    });
})