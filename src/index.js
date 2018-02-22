/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;// your implementation
    var n = preferences.length;
    if (n < 3) {
        return 0;
    }

    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            for (var k = 0; k < n; k++){
                if ((preferences[i] == k + 1)
                  && (preferences[j] == i + 1)
                   && (preferences[k] == j + 1)
                    && (preferences[i] != preferences[j])
                      && (preferences[j] != preferences[k])
                       && (preferences[k] != preferences[i]))
                {
                    count++;
                }
            }
        }
    }
    if (count%3===0){
        count = count/3;
    }

    return count;
};
