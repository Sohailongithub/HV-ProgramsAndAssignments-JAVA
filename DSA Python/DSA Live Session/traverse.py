deletenode(root,value){
    if (root===null){
      return null;
    }
    if (value<root.value){
      root.left=this.deletenode(root.left,value)
    }else if (value>root.value){
      root.right=this.deletenode(root.right,value)
    }else{
      if (!root.left && !root.right){
        return null;
      }
      if(!root.left){
        return root.right;
      }elseif (!root.right){
        return root.left
      }
      root.value= this.min(root.right)
      root.right= this.deletenode(root.right,root.value)
    }
    return root;
  }
  deletebst(value){
    this.root=this.deletenode(this.root,value)
  }