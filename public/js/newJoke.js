const newFormHandler = async (event) => {
    event.preventDefault();
  
    const joke_text = document.querySelector('#joke-content').value.trim();
    
    if(joke_text ){
        const response = await fetch(`/api/jokes`, {
            method: 'POST',
            body: JSON.stringify({ joke_text }),
            headers: {'Content-Type': 'application/json',},
      });
      if (response.ok)  {
         document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
    
};
document.querySelector('#new-joke-form').addEventListener('submit', newFormHandler);
  