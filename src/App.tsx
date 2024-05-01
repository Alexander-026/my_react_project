import "./App.scss";
import Image from "./components/ImageComponent/ImageComponent";
import ListsComponent from "./components/ListsComponent/ListsComponent";
import ParagraphsComponent from "./components/ParagraphsComponent/ParagraphsComponent";
import DynamicHeader from "./components/TitleComponent/TitleComponent";
import VideoComponent from "./components/VIdeoComponent/VideoComponent";
import { Item } from "./types/item";

function App() {
  const items: Item[] = [
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 6" },
    { id: 1, text: "Item 1" },
    { id: 3, text: "Item 3" },
    { id: 8, text: "Item 8" },
    { id: 7, text: "Item 7" },
    { id: 10, text: "Item 10" },
    { id: 2, text: "Item 2" },
    { id: 9, text: "Item 9" },
  ];
  return (
    <div className="App">
      <DynamicHeader level="h3" text="My Image" />
      <div className="content">
        <Image classname="img" src="/img-1.avif" />
      </div>
      <DynamicHeader level="h3" text="My Video" />
      <div className="content">
        <VideoComponent
          src="https://www.youtube.com/embed/G2Rg2u86O0g"
          title="My Video"
        />
      </div>
      <DynamicHeader level="h3" text="My Paragraphs" />
      <ParagraphsComponent title1="Title 1" title2="Title 2" title3="Title 3" />
      <DynamicHeader level="h3" text="My Lists" />
      <ListsComponent items={items} />
    </div>
  );
}

export default App;
