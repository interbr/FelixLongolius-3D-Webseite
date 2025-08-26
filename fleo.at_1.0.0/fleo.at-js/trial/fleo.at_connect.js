(() => {
    if (typeof connectItemsTrick === "undefined") {
    var connectItemsTrick = 0;
    var connectItemsChoosen = 0;
    var connectItemsArrays = [];
    var handlePreviewFix = [];
    var oldDotNum = [];
    var leftPercent, topPercent, treeHeight, treeWidth, scaleNowForConnectionDots;
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const sourceItemConnections = new EventSource("/fleo.at-php/wowConnections.php?room=" + myRoom);


    sourceItemConnections.onerror = function(event) {
    console.log('Connection lost. Attempting to reconnect...');
    sourceItemConnections.close();
    setTimeout(function(){ const sourceItemConnections = new EventSource("/fleo.at-php/wowConnections.php?room=" + myRoom); }, 3000);
};

function getEdgeIntersection(dx, dy, width, height) {
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const scaleX = halfWidth / Math.abs(dx);
    const scaleY = halfHeight / Math.abs(dy);
    const scaleWhat = Math.min(scaleX, scaleY);

    return {
        x: dx * scaleWhat,
        y: dy * scaleWhat
    };
}

function startConnectionMode() {
    connectItemsTrick = 1;
    $(".tree").on("mouseover.visualToggle", function () {
        handleTreeHover($(this));
    });
}

function handleTreeHover($tree) {
    if ($tree.hasClass("getConnectItemHandleOverlay")) {
        if (connectItemsTrick == 1) {
            resetConnectionState();
        }
    } else {
            resetConnectionState();
            $tree.addClass("addVisualConnectionActive");
            $tree.append('<div class="tree getConnectItemHandleOverlay getConnectItemOverlayColor-' + connectItemsChoosen + ' getConnectionOverlayId-' + $tree.parent().attr("data-attr") + '" style="width:' + $tree.css("width") + ';height:' + $tree.css("height") + ';">' + (connectItemsChoosen + 1) + '</div>');
            handleOverlayClick($tree);
            handleOverlayMouseMove($tree);
    }
}

function handleOverlayClick($tree) {
    $(document).off("click.overlayClick").on("click.overlayClick", ".getConnectItemHandleOverlay", function () {
        console.log("Handle clicked!");
        connectItemsArrays[connectItemsChoosen] = {
        id: $tree.parent().attr("data-attr"),
        xPercent: leftPercent,
        yPercent: topPercent,
        treeHeight: treeHeight,
        treeWidth: treeWidth
        }
        // console.log(connectItemsArrays[connectItemsChoosen]);
        if (connectItemsChoosen == 0) {
        handlePreviewFix[connectItemsChoosen] = $tree.find(".connection-handle-preview-" + connectItemsChoosen + "-fix");
        if (handlePreviewFix[connectItemsChoosen].length == 0) {
            handlePreviewFix[connectItemsChoosen] = $('<div class="connection-handle-preview-' + connectItemsChoosen + '-fix"></div>');
            $tree.append(handlePreviewFix[connectItemsChoosen]);
            handlePreviewFix[connectItemsChoosen].css({
                "left": leftPercentForHandle + "%",
                "top": topPercentForHandle + "%"
            });
        }
    } else if (connectItemsChoosen === 1) {
        connectItemsChoosen = -1;
    $.post("/fleo.at-php/wowConnectionsReceive.php", {
        start: connectItemsArrays[0],
        end: connectItemsArrays[1]
    }, function(response) {
        console.log("Server response:", response);
        $(".connection-handle-preview-0-fix").remove();
    });
    }

        resetConnectionState();
        connectItemsChoosen++;
    });
}

function handleOverlayMouseMove($tree) {

$(".getConnectItemHandleOverlay").on("mousemove", debounce(function (e) {
        const rect = $tree[0].getBoundingClientRect();
        treeWidth = rect.width;
        treeHeight = rect.height;
        const centerX = rect.left + treeWidth / 2;
        const centerY = rect.top + treeHeight / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const intersection = getEdgeIntersection(dx, dy, treeWidth, treeHeight);
        const handleX = centerX + intersection.x;
        const handleY = centerY + intersection.y;

        let handlePreview = $tree.find(".connection-handle-preview");
        if (handlePreview.length === 0) {
            handlePreview = $('<div class="connection-handle-preview"></div>');
            $tree.append(handlePreview);
        }

        const localMatrix = window.getComputedStyle($tree.parent()[0]).transform;
        const localScaleX = parseFloat(localMatrix?.match(/matrix\(([^)]+)\)/)?.[1].split(',')[0]) || 1;
        const scaleHere = localScaleX * thisAllScale;
        const treeWidthLater = treeWidth / scaleHere;
        const treeHeightLater = treeHeight / scaleHere;

        const offsetXForHandle = (handleX / scaleHere) - (rect.left / scaleHere) - (10 / scaleHere);
        const offsetYForHandle = (handleY / scaleHere) - (rect.top / scaleHere) - (10 / scaleHere);

        const offsetX = (handleX / scaleHere) - (rect.left / scaleHere);
        const offsetY = (handleY / scaleHere) - (rect.top / scaleHere);

        leftPercentForHandle = (offsetXForHandle / treeWidthLater) * 100;
        topPercentForHandle = (offsetYForHandle / treeHeightLater) * 100;

        leftPercent = (offsetX / treeWidthLater) * 100;
        topPercent = (offsetY / treeHeightLater) * 100; 

        handlePreview.css({
            left: leftPercentForHandle + "%",
            top: topPercentForHandle + "%"
        });
    }, 10));
}

function resetConnectionState() {
    $(".addVisualConnectionActive").removeClass("addVisualConnectionActive");
    $(".getConnectItemHandleOverlay").remove();
    $(".connection-handle-preview").remove();
    connectItemsTrick = 0;
    $(".tree").off("mouseover.visualToggle");
}

document.addEventListener("keydown", function (event) {
    if ((event.key == "k") && spacebarText == 0) {
        event.preventDefault();
        startConnectionMode();
    }
});


setTimeout(function(){ $(".handleCloseMap").click(); }, 3000);
$("#menuBottom").append('<div id="spacebarText" class="color: rgba(255, 0, 200, 0.45); cockpit menuItem"><span style="text-decoration: line-through;">text</span> or ctrl</div>');
$('#spacebarText').on('click', function () {
    spacebarText = spacebarText == 1 ? 0 : 1;
    if (spacebarText == 1) {
        $(this).html('text or <span style="text-decoration: line-through;">ctrl</span>');
    } else {
        $(this).html('<span style="text-decoration: line-through;">text</span> or ctrl');
    }
});
spacebarText = 0;





const rainbowColors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#8B00FF", // Violet
    "#FF1493"  // Deep Pink (extra flair!)
];

function handleOnFirstAndLast(commonClass) {
$('.' + commonClass).first().addClass("handleForVisualisation");
$('.' + commonClass).eq(-2).removeClass("handleForVisualisation");
$('.' + commonClass).last().addClass("handleForVisualisation");
}

    
sourceItemConnections.addEventListener("dotsUpdate", function (e) {
const dataIC = JSON.parse(e.data);

if (!dataIC.dots || !Array.isArray(dataIC.dots)) return;

    dataIC.dots.forEach(dot => {
    let scaleClass, scaleClassDist, latPx;

    if (am == "f") {
        scaleClassDist = Math.round(dot.lat + sMMssM);
        scaleClass = "scale" + scaleClassDist;
		latPx = dot.lon + historyCoords + turn;
    } else if (am == "b") {
        scaleClassDist = Math.round((dot.lat * -1) - sMMssM);
        scaleClass = "scale" + scaleClassDist;
		latPx = dot.lon + historyCoords - 10 + turn;
    }

    const dotId = "dot-" + dot.conkey + "_" + dot.index;
    const dotClass = "dots-" + dot.conkey;
if (!$("#" + dotId).length && dot.index <= dot.numDots) {

    const $dot = $(`
        <div id="${dotId}" class="move thing ${scaleClass}" 
             data-attr="${dot.conkey}" 
             data-dotnum="${dot.index}" 
             data-dotclass="${dotClass}" 
             data-online="1" 
             distance="${scaleClassDist}" 
             playing="true">
            <div class="tree fleoAt conDotted ${dotClass}" style="
                position: absolute;
                width: 20px;
                height: 20px;
                background: ${rainbowColors[dot.index % rainbowColors.length]};
                border-radius: 50%;
                bottom: ${dot.height}px;
                left: ${latPx}px;">
            </div>
        </div>
    `);

    $("#wrapper").append($dot);
    handleOnFirstAndLast(dotClass);
    oldDotNum[dotClass] = dot.numDots;
    }
    if ($("#" + dotId).length && dot.index <= dot.numDots) {


const $dotEl = $("#" + dotId);
    $dotEl.find(".tree").animate({ "bottom": dot.height + "px", "left": latPx + "px" }, {
        duration: 1000,
        queue: false,
        easing: "linear"
    });
    scaleNowForConnectionDots = parseInt($dotEl.attr("distance"));
    let scaleGoForConnectionDots = parseInt(((sMMssM) + (dot.lat)));
    if (am == "b") { scaleGoForConnectionDots = parseInt((((sMMssM) + (dot.lat)) + (went * 2)) * -1); }
    $dotEl.css("transition", "bottom 1.0s linear 0s, transform 1.0s linear 0s, margin-bottom 1.0s linear 0s");
    $dotEl.toggleClass("scale" + scaleNowForConnectionDots).toggleClass("scale" + scaleGoForConnectionDots);
    $dotEl.attr("distance", scaleGoForConnectionDots);
    handleOnFirstAndLast(dotClass);

    }
     if (
    typeof dot.numDots === "number" &&
    dot.numDots < oldDotNum[dotClass]
) {
    oldDotNum[dotClass] = dot.numDots;
    // Select all elements with the matching data-dotclass
    $(`[data-dotclass='${dotClass}']`).each(function () {
        const $el = $(this);
        const dotNumAttr = $el.data("dotnum");

        // Parse and validate dotnum
        const dotNum = parseInt(dotNumAttr, 10);
        if (!isNaN(dotNum) && dotNum > dot.numDots) {
  $el.remove();
  handleOnFirstAndLast(dotClass);

}
});
}

    });
});
sourceItemConnections.addEventListener("dotsRemove", function (e) {
const dataIC = JSON.parse(e.data);
$("." + dataIC.removeDots).parent().remove();

});
})();


let resizeQueue = [];
let isProcessing = false;

const resizeObserver = new ResizeObserver(entries => {
    resizeQueue.push(...entries);

    if (!isProcessing) {
        isProcessing = true;
        setTimeout(() => {
            if (ready == 1) {
            const uniqueElements = [...new Set(resizeQueue.map(e => e.target))];

            uniqueElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;

                // console.log(`Throttled resize:`, el);
                // console.log(`Size: ${width}px × ${height}px`);

                // Optional: send update to server
                $.post("/fleo.at-php/wowConnectionsReceive.php", {
                    resizeUpdate: 1,
                    idToUpdate: $(el).parent(".move").data("attr"),
                    width: width,
                    height: height,
                    room: myRoom
                });
            });
}
            resizeQueue = [];
            isProcessing = false;
        
        }, 1000); // 1 second rhythm
    }
});

// Attach to all .tree elements
document.querySelectorAll('.tree').forEach(el => {
    resizeObserver.observe(el);
});