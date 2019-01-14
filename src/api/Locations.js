/* https://developer.foursquare.com/docs/api/configuration/authentication */
/* Create a promise to fetch the FourSquare API venues. */

const CLIENT_ID = "YRFTTM34KOCWNRCO5W1KH55CQDJYMFQ2TQF1VUW4XZCXF3WK";
const CLIENT_SECRET = "0K5BCHIE21HDFKVT3KHRAZOETHT5OGTOYQU51MZBYANMHTXJ";

export const getLocations = () => {
    return fetch(`https://api.foursquare.com/v2/venues/explore?limit=10&query=museum&near=east-village-new-york&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323`)
        .then(resp => resp.json())
        .then(result => result.response.groups[0].items)
        .catch(error => {
          alert(
            "An error occurred while trying to fetch data from Foursquare: " +
              error
          );
        })
};
