const fs = require('fs/promises');
const path = require('path');

async function processLog(){
  try{
    const filePath = path.join(__dirname, 'server.log');
    await fs.writeFile(filePath, "Node.js server initialized successfully.\n");
    console.log('file created!');

    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:', data);
  }
    catch(error){
      console.error("Error handling file:", error);
    }
  }
  processLog();
