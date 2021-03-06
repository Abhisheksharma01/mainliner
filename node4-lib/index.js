"use strict";

const lifeCycles = require("./lifeCycles");
const modifiers = require("./modifiers");
const Graph = require("./Graph");
const Container = require("./Container");

module.exports = {
  create: function create() {
    return new Container(new Graph(lifeCycles, modifiers), modifiers);
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJsaWZlQ3ljbGVzIiwicmVxdWlyZSIsIm1vZGlmaWVycyIsIkdyYXBoIiwiQ29udGFpbmVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxhQUFhQyxRQUFRLGNBQVIsQ0FBbkI7QUFDQSxNQUFNQyxZQUFZRCxRQUFRLGFBQVIsQ0FBbEI7QUFDQSxNQUFNRSxRQUFRRixRQUFRLFNBQVIsQ0FBZDtBQUNBLE1BQU1HLFlBQVlILFFBQVEsYUFBUixDQUFsQjs7QUFFQUksT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQURlLG9CQUNOO0FBQ1AsV0FBTyxJQUFJSCxTQUFKLENBQWMsSUFBSUQsS0FBSixDQUFVSCxVQUFWLEVBQXNCRSxTQUF0QixDQUFkLEVBQWdEQSxTQUFoRCxDQUFQO0FBQ0Q7QUFIYyxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpZmVDeWNsZXMgPSByZXF1aXJlKFwiLi9saWZlQ3ljbGVzXCIpO1xuY29uc3QgbW9kaWZpZXJzID0gcmVxdWlyZShcIi4vbW9kaWZpZXJzXCIpO1xuY29uc3QgR3JhcGggPSByZXF1aXJlKFwiLi9HcmFwaFwiKTtcbmNvbnN0IENvbnRhaW5lciA9IHJlcXVpcmUoXCIuL0NvbnRhaW5lclwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lcihuZXcgR3JhcGgobGlmZUN5Y2xlcywgbW9kaWZpZXJzKSwgbW9kaWZpZXJzKTtcbiAgfVxufTtcbiJdfQ==
