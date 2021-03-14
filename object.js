userData = {"reactiveUsers":[{"first_name":"Buddy","last_name":"Annable","email":"bannable3@buzzfeed.com","zipcode":"92903","isAdmin":true,"organizationId":"Station Foundation","isPeer":true,"isPatient":true,"id":"4","activityLevel":"11","resourceClicked":"4"},{"first_name":"Carmita","last_name":"Snawdon","email":"csnawdon1@godaddy.com","zipcode":"91914","isAdmin":true,"isPeer":true,"organizationId":"Station Foundation","id":"2","activityLevel":"8","resourceClicked":"59"},{"first_name":"Lisabeth","last_name":"Chard","email":"lchard4@irs.gov","zipcode":null,"isPatient":true,"isPeer":true,"organizationId":"Station Foundation","id":"5","activityLevel":"7","resourceClicked":"21"},{"first_name":"Mala","last_name":"Jenik","email":"mjenik9@google.co.jp","zipcode":"2985-006","organizationId":"Station Foundation","isPatient":true,"isPeer":true,"id":"10","isAdmin":true,"activityLevel":"55","resourceClicked":"14"},{"first_name":"Marabel","last_name":"Ditchett","email":"mditchett8@vk.com","zipcode":null,"organizationId":"Station Foundation","isPatient":true,"id":"9","activityLevel":"21","resourceClicked":"5"},{"first_name":"Marcile","last_name":"Wilmot","email":"mwilmot6@guardian.co.uk","zipcode":"76350-000","organizationId":"Station Foundation","isPeer":true,"id":"7","activityLevel":"17","resourceClicked":"54"},{"first_name":"Murielle","last_name":"Poulsum","email":"mpoulsum0@theatlantic.com","zipcode":"11130","isPeer":true,"organizationId":"Station Foundation","id":"1","activityLevel":"4","resourceClicked":"7"},{"first_name":"Paxon","last_name":"Gislebert","email":"pgislebert7@jigsy.com","zipcode":null,"organizationId":"Station Foundation","isPeer":true,"id":"8","activityLevel":"19","resourceClicked":"34"},{"first_name":"Sophi","last_name":"Beament","email":"sbeament2@hud.gov","zipcode":"94149","isPatient":true,"isPeer":true,"isFlagged":true,"organizationId":"Station Foundation","id":"3","activityLevel":"12","resourceClicked":"19"},{"first_name":"Tucky","last_name":"Tassell","email":"ttassell5@cnbc.com","zipcode":"50700","isPatient":true,"organizationId":"Station Foundation","isPeer":true,"id":"6","activityLevel":"13","resourceClicked":"46"}]}


const allUsers = userData.reactiveUsers

const allUserRes = allUsers
  .map(user => {
    return `• ${user.first_name} ${user.last_name} has clicked on a total of ${user.resourceClicked} resources \n\n`
  })
  .join('')

// console.log(allUsers[0])

// console.log(allUserRes)

newData = [{"first_name":"Paxon","last_name":"Gislebert","email":"pgislebert7@jigsy.com","zipcode":null,"organizationId":"Station Foundation","isPeer":true,"id":"8","activityLevel":"19","resourceClicked":"34"}]

console.log(newData[0])
console.log(newData[0].first_name)