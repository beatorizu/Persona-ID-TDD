describe("normalizeData", function () {
		it("accepts golden path data", function () {
				var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
				var norm = normalizeData(json);

				expect(norm.name).toEqual("Maria");
				expect(norm.id).toEqual(2111858);
		});
		it("throws a Sintax Error", function () {
				var json = '';
				expect(function () {normalizeData(json);}).toThrow(new Error("Sem dados"));
		});
});
