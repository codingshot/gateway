const TestnetDomains = {
  "test.near.social": true,
  "127.0.0.1": true,
};

export const NetworkId =
  window.location.hostname in TestnetDomains ? "testnet" : "mainnet";
const TestnetWidgets = {
  image: "eugenethedream/widget/Image",
  default: "eugenethedream/widget/Welcome",
  viewSource: "eugenethedream/widget/WidgetSource",
  widgetMetadataEditor: "eugenethedream/widget/WidgetMetadataEditor",
  widgetMetadata: "eugenethedream/widget/WidgetMetadata",
  profileImage: "eugenethedream/widget/ProfileImage",
  profilePage: "eugenethedream/widget/Profile",
  profileName: "eugenethedream/widget/ProfileName",
  notificationButton: "eugenethedream/widget/NotificationButton",
};

const MainnetWidgets = {
  image: "mob.near/widget/Image",
  default: "bos.genadrop.near/widget/GenaDrop.Home.Index",
  viewSource: "mob.near/widget/WidgetSource",
  widgetMetadataEditor: "mob.near/widget/WidgetMetadataEditor",
  widgetMetadata: "mob.near/widget/WidgetMetadata",
  profileImage: "mob.near/widget/ProfileImage",
  notificationButton: "mob.near/widget/NotificationButton",
  profilePage: "bos.genadrop.near/widget/GenaDrop.Profile.Main",
  profileName: "patrick.near/widget/ProfileName",
  editorComponentSearch: "mob.near/widget/Editor.ComponentSearch",
  profileInlineBlock: "mob.near/widget/Profile.InlineBlock",
};

export const Widgets =
  NetworkId === "testnet" ? TestnetWidgets : MainnetWidgets;
