import React, { useState } from 'react'

import cn from 'classnames'
import styles from './reorderPage.module.sass'
import { ReactComponent as DragIcon } from '../../assets/menu.svg'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { ReactComponent as DownArrow } from '../../assets/downArrow.svg'
import { Reorder, useDragControls } from 'framer-motion'

export const ReorderPage = () => {
	const textBlocks = [1, 2, 3, 4, 5, 6]
	const [list, setList] = useState<Array<number>>(textBlocks)
	const controls = useDragControls()

	const handlerDelete = (index: number) => {
		console.log(index)
		setList(prevState => {
			const updatedList = [...prevState]
			updatedList.splice(index, 1)
			return updatedList
		})
	}

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.wrapper__title}> Lets reorder</div>

				<Reorder.Group axis='y' onReorder={setList} values={list}>
					{list.map((textElem, index) => (
						<Reorder.Item
							dragListener={false}
							dragControls={controls}
							key={textElem} value={textElem}>
							<div className={styles.textBlock}>
								<div className={styles.content}>
									<div className={styles.title}>TITLE {textElem}</div>
									<div className={styles.controls}>
										<div
											className={cn(styles.controls__btn, styles.control__drag)}
											onPointerDown={(e) => controls.start(e)}> <DragIcon /> </div>
										<div className={styles.controls__btn} onClick={() => handlerDelete(index)}> <TrashIcon /> </div>
										<div className={styles.controls__btn}> <DownArrow /> </div>
									</div>
								</div>
								<textarea className={styles.textarea} name="" id="" rows={1}></textarea>
							</div>
						</Reorder.Item>
					))}
				</Reorder.Group>
			</div>
		</div>
	)
}