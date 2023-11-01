/*Use destructuring to extract Betty's cat's name, which is stored in a nested object. 
Store it in the name variable. (That variable name matches the name key in cat, 
    which makes the destructuring easier than it would be if it didn't match.)*/
    const user = {
        name: 'Betty',
        cat: {
          name: 'Keanu',
          age: 2,
        },
      };

      //my code 
      //this is not desruction and it is pretty straightworward
      const namecat = user.cat.name;
      //this is destruction and I don't really get it
      const {cat: {name}} = user;
      console.log(namecat);
      console.log(user)
