(function () {
  const observers = [];

  // Create the map container if it doesn't exist
  if ($("#mapPerspectiveWrapper").length === 0) {
    $("body").append(`
      <div id="mapPerspectiveWrapper">
        <div id="superFleoAtMap">
          <button id="closeMapBtn" style="
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 10000;
            padding: 5px 10px;
            background: #333;
            color: #fff;
            border: none;
            cursor: pointer;
          ">× Close</button>

          <div id="mapSideMenu" style="
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            min-width: 150px;
            max-width: 300px;
            width: 20%;
            background: rgba(255,255,255,0.8);
            overflow-y: auto;
            padding: 10px;
            box-sizing: border-box;
          ">
            <h3>Map Menu</h3>
          </div>
        </div>
      </div>
    `);
  }

  // Toggle map visibility and populate objects
  $("#getSuperFleoAtMap").on("click", function () {
    const $wrapper = $("#mapPerspectiveWrapper");
    $wrapper.toggle();

    if ($wrapper.is(":visible")) {
      $(".move").each(function () {
        const $move = $(this);
        const dataAttr = $move.attr("data-attr");
        const distance = parseInt($move.attr("distance"), 10);
        const treeLeft = parseInt($move.find(".tree").css("left"), 10) || 0;
        const treeWidth = parseInt($move.find(".tree").css("width"), 10) || 100;

        const $tree = $move.find(".tree").clone();
        $tree.find("script").remove();
        const treeHeight = parseInt($tree.css("height"), 10) || 0;
        const newHalfHeight = treeHeight / 2;
        const bottomPos = `calc(50% + ${distance / 10}px - ${newHalfHeight}px)`;
        const leftPos = `calc(50% + ${treeLeft / 10}px)`;


        const mapObj = $(`
          <div class="mapObject" id="map-${dataAttr}" 
               style="position: absolute; bottom: ${bottomPos}; left: ${leftPos}; width: ${treeWidth}px;
                      transform: rotateX(-80deg) scale(0.1); transform-origin: center center;">
            ${$tree.html()}
          </div>
        `);

        $("#superFleoAtMap").append(mapObj);

        // Observe changes to the original .move object
        const observer = new MutationObserver(function (mutationsList) {
          mutationsList.forEach(function () {
            const newDistance = parseInt($move.attr("distance"), 10);
            const newLeft = parseInt($move.find(".tree").css("left"), 10) || 0;
            const updatedHeight = parseInt($move.find(".tree").css("height"), 10) || 0;
            const updatedHalfHeight = updatedHeight / 2;
            mapObj.css({
            bottom: `calc(50% + ${newDistance / 10}px - ${updatedHalfHeight}px)`,
            left: `calc(50% + ${newLeft / 10}px)`
            });
          });
        });

        observer.observe($move[0], {
          attributes: true,
          childList: true,
          subtree: true
        });

        observers.push(observer);
      });
    } else {
      observers.forEach(o => o.disconnect());
      observers.length = 0;
      $("#superFleoAtMap").find(".mapObject").remove();
    }
  });

  // Close button logic
  $(document).on("click", "#closeMapBtn", function () {
    observers.forEach(o => o.disconnect());
    observers.length = 0;
    $("#mapPerspectiveWrapper").hide().find(".mapObject").remove();
  });

  // Arrival animation
  $("#wrapper").arrive(".mapObject", function () {
    const $obj = $(this);
    const id = $obj.attr("id");
    console.log("Neues Objekt auf Karte:", id);
    $obj.animate({ opacity: 1 }, 500);
  });
})();
