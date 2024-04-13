import { TrieNode } from "./grind-75/types/trie.node";

class TrieRouter {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(path: string, endpoint:string) {
    let node = this.root;
    for (const part of path.split('/')) {
      if (part) {
        if (!node.value[part]) {
          node.children[part] = new TrieNode();
        }
        node = node.children[part];
      }
    }
    node.value = endpoint;
  }

  search(path) {
    let node = this.root;
    const params = {}; // To store any URL parameters

    for (const part of path.split('/')) {
      if (part) {
        if (node.children[part]) {
          node = node.children[part];
        } else {
          return [null, {}]; // Endpoint not found
        }
      }
    }

    const endpoint = node.value;
    return [endpoint, params];
  }
}

// Example usage:

const router = new TrieRouter();

// Insert some API endpoints
router.insert('/api/users', 'get_users');
router.insert('/api/users/:id', 'get_user_by_id');
router.insert('/api/users/:id/posts', 'get_user_posts');
// router.insert('/auth/users/posts', 'get_user_posts');
// router.insert('/res/users/posts', 'get_user_posts');

// Route incoming requests
const url = '/api/users/42/posts';
const [endpoint, params] = router.search(url);
console.log(JSON.stringify(router));
if (endpoint) {
  console.log(`Endpoint: ${endpoint}`);
  console.log(`URL Parameters:`, params);
} else {
  console.log('Endpoint not found');
}
