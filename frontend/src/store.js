import { observable, action, makeObservable } from "mobx";
class DocumentStore {
  documents = [];

  constructor() {
    makeObservable(this, {
      documents: observable,
      setDocuments: action,
    });
  }

  setDocuments(documents) {
    this.documents = documents;
  }
}

export { DocumentStore };
