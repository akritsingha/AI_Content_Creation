
import type { RequestEvent } from '@builder.io/qwik-city';

type CustomResponse = {
  status: number;
  data: any;
};

type CustomRequestHandler = (event: RequestEvent<QwikCityPlatform>) => Promise<CustomResponse>;


export const onPost: CustomRequestHandler = async ({ request, json }) => {
  const { inputtext="" } = await request.json();
  console.log(inputtext);
  try {
    json(200, { outputText: inputtext });
    return { status: 200, data: { outputText: inputtext } };
  } catch (error) {
    console.error(error);
    json(500, { error: error });
    return { status: 500, data: { error: "sdwdedrffe4" } };
  }
};
