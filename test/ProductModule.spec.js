describe("Product Module Test", function(){
    it("Title Test", function(){
        expect(title("Amazon Shopping")).toBe("Amazon Shopping");
    });
    it("Total Test", ()=>{
        expect(total(2, 7500)).toBe(15000);
    });
})