import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const message = JSON.parse(await readFile('messages.json', 'utf-8'));
    return message[id];
  }

  async findAll() {
    const messages = JSON.parse(await readFile('messages.json', 'utf-8'));
    return messages;
  }

  async create(content: string) {
    const messages = JSON.parse(await readFile('messages.json', 'utf-8'));
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
    return { id, content };
  }
}
