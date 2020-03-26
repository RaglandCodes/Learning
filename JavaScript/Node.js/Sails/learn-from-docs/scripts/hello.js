module.exports = {
  friendlyName: "Hello",

  description: "Hello something.",

  fn: async function() {
    sails.log("Running custom shell script... (`sails run hello`)");
    sails.log.info("I am an info-level message.");
    sails.log("I am a debug-level message");
    sails.log.warn("I am a warn-level message");
  }
};
