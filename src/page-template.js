const outPutCards = (employeeData) => {
	const outPutArray = employeeData.map((employeeObj) => {
		const { role, name, id, email, wildcard } = employeeObj;
		return `
      <div class="card m-4">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title name">${name}</h5>
          <h6 class="card-subtitle mb-2 role">${role}</h6>
        </div>
        <div class="card-body py-5 bg-light">
          <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${id}</li>
            <li class="list-group-item email">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item wildcard">${wildcard}</li>
          </ul>
        </div>
      </div>`;
	});
	return (outPutString = outPutArray.join('\n'));
};

module.exports = (employeeData) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile</title>
    </head>
    <body>
      <header class="bg-danger text-white py-4 text-center">
        <h2>My Team</h2>
      </header>
      <main class="d-flex flex-wrap p-5 justify-content-center">
        ${outPutCards(employeeData)}
      </main>
    
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      
    </body>
    </html>
  `;
};