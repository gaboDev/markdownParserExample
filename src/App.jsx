import ReactMarkdown from "react-markdown";
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import gfm from 'remark-gfm'

const useStyles = makeStyles(() => ({
 container: {
     margin: "1em auto",
     width: "50%",
     background: "whitesmoke",
     padding: "1em",
 },
 title: {
    marginBottom: "1em",
 }
}));

function App() {
  const classes = useStyles();
  const raw = `
  #### Markdown parser example
  | Tables   |      Are      |  Cool |
  |----------|:-------------:|------:|
  | col 1 is |  left-aligned | $1600 |
  | col 2 is |    centered   |   $12 |
  | col 3 is | right-aligned |    $1 |`;
  return (
    <ReactMarkdown
        className={classes.container}
        plugins={[gfm]}
        components={{
          h4: ({children}) => (<Typography className={classes.title} variant="h4" children={children}/>) ,
          table: ({children}) => (<TableContainer component={Paper}>
                                                <Table children={children}/>
                                             </TableContainer>),
          thead: ({children}) => (<TableHead children={children}/>),
          tr: ({children}) => (<TableRow children={children}/>),
          th: ({children}) => (<TableCell children={children}/>),
          td: ({children}) => (<TableCell children={children}/>),
          tbody: ({children}) => (<TableBody children={children}/>),
        }}
        children={raw}/>
  );
}

export default App;
