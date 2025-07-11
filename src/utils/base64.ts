export const toB64 = (obj: any) => {
  return Buffer.from(JSON.stringify(obj)).toString('base64');
};

export const fromB64 = (b64: string) => {
  return JSON.parse(Buffer.from(b64, 'base64').toString());
};
