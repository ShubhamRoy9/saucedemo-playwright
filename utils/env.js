const environments = {
  qa: {
    baseURL: 'https://www.saucedemo.com',
  },

  stage: {
    baseURL: 'https://www.saucedemo-stage.com'
  },

  prod: {
    baseURL: 'https://www.saucedemo-prod.com'
  }
};

module.exports = environments;



// npx playwright test - Default (QA)
// ENV=stage npx playwright test  or  $env:ENV="stage"; npx playwright test   - Run on Stage
// ENV=prod npx playwright test - Run On Prod
 
