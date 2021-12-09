import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '120s',
};
export default function () {
    // trial
  // http.get('http://host.docker.internal:30001/test');

  // backend
  const a = parseInt(Math.random()*100,10);
  for (let i = 0; i < a; i++) {
    http.get('http://host.docker.internal:30003/test');
  }

  const b = parseInt(Math.random()*20,10);
  for (let i = 0; i < b; i++) {
    http.get('http://host.docker.internal:30003/error');
  }
  

  // frontend
  const c = parseInt(Math.random()*50,10);
  for (let i = 0; i < c; i++) {
    http.get('http://host.docker.internal:30005/test');
  }
  

  sleep(3);
}