/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var map = {};
  var count = 0;

  var res = emails.forEach(email => {
    var local = email.split('@')[0];
    var domain = email.split('@')[1];
    if (local.includes('+')) {
      local = local.split('+')[0];
    }
    
    local = local.replace(/\./g, '');
    var key = local + '@' + domain;

    if (!map[key]) {
      map[key] = true;
      count++;
    }
  });

  return count;
};
