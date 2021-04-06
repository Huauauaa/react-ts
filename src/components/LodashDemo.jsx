import _ from 'lodash';

function LodashDemo() {
  const compiler = _.template('<h1><%= title %></h1>');
  const html = compiler({ title: 'My Component' });

  const compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
  const html1 = compiled({ users: ['fred', 'barney'] });

  return (
    <fieldset>
      <legend>lodash</legend>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div dangerouslySetInnerHTML={{ __html: html1 }}></div>
    </fieldset>
  );
}

export default LodashDemo;
