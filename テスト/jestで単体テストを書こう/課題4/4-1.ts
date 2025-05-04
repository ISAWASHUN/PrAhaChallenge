// 4-1の1問目
export function isValid(s: string): boolean {
  const stack: string[] = [];

  const pair: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      const top = stack.pop();
      if (top !== pair[ch]) return false;
    }
  }

  return stack.length === 0;
}

// 4-1の2問目
export function countChars(input: string): Record<string, number> {
  const freq: Record<string, number> = {};
  for (const ch of input) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }
  return freq;
}

// 4-1の3問目
import axios from "axios"

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPost(id: number): Promise<Post> {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const response = await axios.get<Post>(url);
    return response.data;
  } catch (err) {
    throw err;
  }
}

