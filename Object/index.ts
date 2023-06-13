var user = {
  firstName: "sanni",
  lastName: "damilola",
  role: "Admin",
  loginCount: 32,
  codelabSignIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

// console.log(user.buyCourse("React JS"));
// console.log(user.buyCourse("Node JS"));
// console.log(user.getCourseCount());
console.log(Object.keys(user));
console.log(Object.values(user));
