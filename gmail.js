let email="nikhilreddy1616@gmail.com"
function validateBirthDate(inputDate)
            {
                    const currentDate = new Date();
                  const userDate = new Date(inputDate);
            
                  if (isNaN(userDate) || userDate > currentDate) {
                
                    console.log("false");
                  } else {
                        console.log("true");
                      }
                    }

validateBirthDate('12-12-2025')


