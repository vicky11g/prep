/* 
Problem: Design a file system to support getting the size of any directory.
You are expected to solve the problem and also an extension around it.
Optimization was to get the top n directories in the file system as a report.
Some questions around the choice of data structures, choosing to calculate report 
upfront or when asked.
*/

class FileNode {
  name: string;
  type: string;
  size: number;

  constructor(name: string, type: string, size?: number) {
    this.name = name;
    this.type = type;
    this.size = size || 0;
  }
}

class DirectoryNode {
  name: string;
  type: string;
  size: number;
  child = [];

  constructor(name: string, type: string, size?: number) {
    this.name = name;
    this.type = type;
    this.size = size || 0;
  }

  appendChild(node: DirectoryNode | FileNode) {
    this.child.push(node);
    this.size += node.size;
  }
}
