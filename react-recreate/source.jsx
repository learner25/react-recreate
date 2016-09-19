var destination = document.querySelector("#container");
     var listItems;
      
    var Draggable = ReactDraggable;
    var TodoItems = React.createClass({
      getInitialState: function () {
      return {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -40, y: 20
        }
      };
    },
    handleDrag: function (e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    },
     
    onStart: function() {
      this.setState({activeDrags: ++this.state.activeDrags});
    },

    onStop: function() {
      this.setState({activeDrags: --this.state.activeDrags});
    },
     adjustXPos: function(e) {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x: x - 10, y}});
    },

    adjustYPos: function(e) {
      e.preventDefault();
      e.stopPropagation();
      const {controlledPosition} = this.state;
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x, y: y - 10}});
    },

    onControlledDrag: function(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    },

    onControlledDragStop: function(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});


    },
      render: function() {
        var todoEntries = this.props.entries;

        
        
         const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
      const {deltaPosition} = this.state;
        function createTasks(item) {
          var mystyle={ padding: 10,
        margin: 10,
        backgroundImage:'url('+item.text+')',
        boxSizing:'border-box',
        float:'left',
        textAlign: "center",
        backgroundSize:"contain",
        width:"50px",
        height:"50px"};


          console.log('dynamic item data:'+item.text)
          return (
           
            <Draggable  bound="parent" {...dragHandlers}>
            <div key={item.key}  style={mystyle}>
           
          
            
           </div>
           </Draggable>
            
           )
        }

       listItems = todoEntries.map(createTasks);

        return (



          <div>
         
          
        
            {listItems}

          
          
          </div>
        );
      }
    });

    var TodoList = React.createClass({
      getInitialState: function() {
        return {
          items: []
        };
      },

      allowDrop:function (ev) {
  ev.preventDefault();
  console.log('ondragover');
 },


      addItem: function(e) {
        var itemArray = this.state.items;
        var data = e.dataTransfer.getData("text");
        lord=data
        console.log("transfarred data:"+data)
        console.log('event')
       
        itemArray.push(
          {
            text: data,
            key: Date.now() 
          }
        );

        this.setState({
          items: itemArray
        });

       // this._inputElement.value = "";

        e.preventDefault();
      },
      render: function() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form >
                 
                <div className="canver" onDrop={this.addItem} onDragOver={this.allowDrop} style={{position:'relative', overflow: 'auto'}}>
                    <TodoItems entries={this.state.items}/>
                </div>
              </form>
            </div>
           
          </div>
        );
      }
    });

    ReactDOM.render(
      <div>
        <TodoList/>
      </div>,
      destination
    );