"https://media3.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=790b7611ccd11a930dd9ac32bd2c3f6bec5319669d3a458e&rid=giphy.gif&ct=g"

const apiResult = [{
    title: "title1",
    description: "desc1",
    output:  "https://media3.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=790b7611ccd11a930dd9ac32bd2c3f6bec5319669d3a458e&rid=giphy.gif&ct=g"
  }, {
    title: "title2",
    description: "desc2",
    output: "out2"
  }, {
    title: "title3",
    description: "desc3",
    output: "out"
  }, {
    title: "title3",
    description: "desc3",
    output: "out3"
  }];
  
  
  const container = document.getElementById('accordion');
  
  apiResult.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';
  
    // Construct card content
    const content = `
      <div class="card">
      <div class="card-header" id="heading-${idx}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">Button
  
                  </button>
        </h5>
      </div>
  
      <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
        <div class="card-body">
  
          <h5>${result.title}</h5>
          <p>${result.description}</p>
          <div><img src=${result.output}></div>
          ...
        </div>
      </div>
    </div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content;
  })
