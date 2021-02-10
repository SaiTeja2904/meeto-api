import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { exec, execSync } from 'child_process';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JavascriptCompilerService {
  compile(code) {
    const uuid = uuidv4();
    const fileName = `${uuid}.js`;
    const filePath = `${fileName}`;
    fs.writeFileSync(filePath, code);
    let output;
    try {
      output = execSync(`node ${filePath}`);
      this.deleteFile(filePath);
    } catch (e) {
      this.deleteFile(filePath);
      return { response: e.message.split('\n').slice(2, 6).join('\n') };
    }
    return { response: output.toString() };
  }

  deleteFile(filePath) {
    fs.unlinkSync(filePath);
  }
}
