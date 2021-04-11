// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const joke_text = document.querySelector('#joke-content').value.trim();
//     console.log(joke_text);
//    await fetch(`/api/jokes`, {
//         method: 'POST',
//         body: JSON.stringify({ joke_text }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//     document.location.replace('/');
//     };
//   document.querySelector('.new-joke-form').addEventListener('submit', newFormHandler);
  