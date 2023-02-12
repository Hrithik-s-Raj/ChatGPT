interface Message {
  text: String;
  createdAt: admin.firestore.Timmestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
