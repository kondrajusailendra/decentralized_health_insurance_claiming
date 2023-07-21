// import IPFS from 'ipfs-http-client';
// const ipfs = IPFS.create({host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// export default ipfs;



// const IPFS = require('ipfs-api');
// const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// export default ipfs;



const ipfsClient = require('ipfs-api');

const projectId = '2OlkRLpdoNoZwswqhLntR28xHQu'; // Replace with your own project ID
const projectSecret = 'addc936784ff8df06f8e27e3fac52365'; // Replace with your own secret key
const endpoint = `https://ipfs.infura.io:5001/api/v0/?arg=${projectId}`;
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  url: endpoint,
  headers: {
    authorization: auth,
  },
});

// Use the IPFS client to interact with IPFS, for example to add a file:
// const data = 'Hello IPFS!';
// const added = await ipfs.add(data);
// console.log(added.cid.toString());

export default ipfs;
