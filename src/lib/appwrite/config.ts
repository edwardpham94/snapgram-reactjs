import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  credentials: true,
  projectId: import.meta.env.VITER_APPWRITE_PROJECT_ID,
  // url: import.meta.env.VITER_APPWRITE_URL,
  url: "https://cloud.appwrite.io/v1",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
