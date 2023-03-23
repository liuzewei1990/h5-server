"use strict";

const { Controller } = require("egg");

// const { Configuration, OpenAIApi } = require('openai');

class HomeController extends Controller {
  async index() {
    // const configuration = new Configuration({
    //   organization: 'org-GRSYiuo93J3YhKGyNdNJZbfJ',
    //   apiKey: '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',
    // });
    // const openai = new OpenAIApi(configuration);
    // const response = await openai.listEngines();
    // console.log(1111, response);

    const { ctx } = this;
    console.log(ctx);
    ctx.body = { data: "hi,egg" };
  }
}

module.exports = HomeController;
