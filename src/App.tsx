import { defineComponent } from "vue";
import Header from "./components/header/Header";
const App = defineComponent({
        setup() {
                return () => (<div>
                        <Header />
                </div>
                )
        },
})
export default App