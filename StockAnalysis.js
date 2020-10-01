const stockAnalysis = (sources) => {
    const mapping = {};
    for(source in sources) {
        for(kv in source) {
            let k, v = kv.split(":");
            mapping[k] = v
        }
    }
    let results = [];
    for(let key in mapping) {
        results.push(mapping[key]);
    }
    return results;
}