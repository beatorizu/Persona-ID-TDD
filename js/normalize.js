function normalizeData(jsonIn) {
		if (jsonIn == '') {
			throw new Error("Sem dados");
		}
    data = JSON.parse(jsonIn);
    return {
        name: data.Name,
        id: data.PersonalIdentifier
    };
}
