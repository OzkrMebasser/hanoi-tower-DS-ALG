import React, { useEffect, useState, useRef } from "react";
import { Watermark } from '@hirohe/react-watermark';
import Nav from "./components/Nav";
import GameOptionsComp from "./components/GameOptionsComp";
import WinMessageComp from "./components/WinMessageComp";
import TowerComp from "./components/TowerComp";
import Confetti from 'react-confetti'
import Tower from "./utils/Tower";
import "./App.css";

const App = () => {

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [showConffeti, setShowConffeti] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.height);
    setWidth(confettiRef.width);
  }, [])

   //Contar los movimientos de los disks
  const [moveCount, setMoveCount] = useState(1);
  //Para jalar los disco de torre a torre
  const [dragTile, setDragTile] = useState();
  //disks de la torre principal izquierdo e inicial
  const [disks, setDisks] = useState(3);

  //Los discos de cada torre (1, 2, 3)
  const [tiles, setTiles] = useState([]);
  const [tilesTwo, setTilesTwo] = useState([]);
  const [tilesThree, setTilesThree] = useState([]);

  //Las 3 columnas
  let [towerOne, setTowerOne] = useState(new Tower());
  let [towerTwo, setTowerTwo] = useState(new Tower());
  let [towerThree, setTowerThree] = useState(new Tower());

  const towers = {
    1: {
      tower: towerOne,
    },
    2: {
      tower: towerTwo,
    },
    3: {
      tower: towerThree,
    },
  };

  useEffect(() => {
    //Resetear las torres
    reset(); // Actualizar el primer render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disks]);

  //Actualizar todos los discos de las torres
  //Esta actualización se hará con cada movimiento de las torres
  useEffect(() => {
    // console.log("Se ha actualizado la torre no. 1");
    console.log(towerOne)
    setTiles(towerOne.disks.traverse());
  }, [towerOne]);

  useEffect(() => {
    setTilesTwo(towerTwo.disks.traverse());
    console.log(towerTwo)
  }, [towerTwo]);

  useEffect(() => {
    setTilesThree(towerThree.disks.traverse());
    console.log(towerThree)
  }, [towerThree]);

  const reset = () => {
    //COMPLETAR
    towerOne = new Tower();
    towerTwo = new Tower();
    towerThree = new Tower();
    if (disks > 0) {
      for (let i = disks; i > 0; i--) {
        towerOne.add(i);
      }
    }
    console.log(JSON.stringify(towerOne.disks.top));
    setTowerOne(towerOne);
    setTowerTwo(towerTwo);
    setTowerThree(towerThree);
    setMoveCount(0);
  };

  const handleDrag = (e, tile, id) => {
    //Drag un disco que se encuentra en la parte superior de una torre
    const dragTile = { tile, towerId: id };
    if (towers[id].tower.disks.top === dragTile.tile) {
      setDragTile(dragTile);
    } else {
      e.preventDefault();
    }
  };

  const handleDrop = (e) => {
    //Drop un disco se deja en una nueva torre
    const dropColumn = e.currentTarget.id; //ID de la columna de destino
    let source = towers[dragTile.towerId].tower; //Torre de origen
    // console.log(source)
    let destination = towers[dropColumn].tower; //Torre de destino

    const goodMove = source.moveTopTo(destination, setMoveCount, moveCount); //Mover el disco desde la torre de origen al destino
    if (goodMove) {
      //Si es un movimiento valido -> incrementar los movimientos
      setMoveCount((prevState) => prevState + 1); //Actualizar los movimientos
      setTiles(towerOne.disks.traverse()); //Actualizar los discos de la torre 1
      setTilesTwo(towerTwo.disks.traverse()); //Actualizar los discos de la torre 2
      setTilesThree(towerThree.disks.traverse()); //Actualizar los discos de la torre 3
    }
  };

 
  const winCondition = towerOne.size === 0 && towerTwo.size === 0; //COMPLETAR

  const handleShow = showConffeti => {
    setShowConffeti(showConffeti);
  }

  return (
    <>
  
  < Nav/>
      <div className="container">
           
         <GameOptionsComp
          disks={disks}
          setDisks={setDisks}
          reset={reset}
          moveCount={moveCount}
          winCondition={winCondition}
        />
       <Watermark 
rotate={0}
lineHeight={'5rem'}
multiline={false}
 text="h"
 >
        <div className="content">
          <TowerComp
            id={1}
            disks={tiles}
            handleDrag={handleDrag}
            handleDrop={handleDrop}         
          />
          <TowerComp
            id={2}
            disks={tilesTwo}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
          <TowerComp 
            id={3}
            disks={tilesThree}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        </div>   
        </Watermark> 
        {winCondition  && <WinMessageComp moveCount={moveCount} /> }
        
        {winCondition  && <Confetti
      width={width}
      height={height}
      recycle={showConffeti}
      numberOfPieces={1000}
      
    />}{() => handleShow(true)}
        
      </div>
    
      
    </>
  );
};

export default App;