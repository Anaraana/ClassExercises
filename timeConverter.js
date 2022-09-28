// Write a function that takes 3 parameters, which are (h, m, s)
// The function should convert the hours, minutes and seconds to milliseconds
// timeConverter(1, 20, 30) → 4830000 milliseconds

const timeConverter = (h, m, s) => {
 console.log((h*3600+ m*60+s)*1000)     
}
timeConverter(1,20,30)

// h= h * 60m*60s*1000
// m = m* 60s*1000
// s = s*1000   ====> ((h*3600+ m*60+s)*1000)